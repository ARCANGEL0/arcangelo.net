${SegmentFile}

${SegmentInit}
    ${If} ${IsNT}
        ${IfNot} ${AtLeastWin7}
            MessageBox MB_ICONSTOP|MB_TOPMOST `You must have atleast Windows 7 or better. Launcher aborting!`
            Call Unload
            Quit
        ${EndIf}
    ${Else}
        MessageBox MB_ICONSTOP|MB_TOPMOST `You must have atleast Windows 7 or better. Launcher aborting!`
        Call Unload
        Quit
    ${EndIf}
!macroend

${SegmentPrePrimary}
    Rename "$EXEDIR\Data\user-data\*.*" "$EXEDIR\App\SublimeText\Data\"
!macroend

${SegmentPostPrimary}
    Rename "$EXEDIR\App\SublimeText\Data\" "$EXEDIR\Data\user-data\*.*"
!macroend