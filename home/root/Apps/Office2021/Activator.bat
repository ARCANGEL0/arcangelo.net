if exist "C:\Apps\Microsoft Office\Office16\ospp.vbs" cd /d "C:\Apps\Microsoft Office\Office16"
if exist "C:\Apps (x86)\Microsoft Office\Office16\ospp.vbs" cd /d "C:\Apps (x86)\Microsoft Office\Office16"
for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2021VL_KMS*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x"
cscript ospp.vbs /inpkey:FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH
cscript ospp.vbs /sethst:kms.msgang.com
cscript ospp.vbs /act
pause