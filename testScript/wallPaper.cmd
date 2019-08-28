@ECHO OFF

@ECHO           *********************************************************************************************************
@ECHO                                               Win10
@ECHO                         1
@ECHO                          2
@ECHO                          3
@ECHO           *********************************************************************************************************

copy C:\Users\%username%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\* C:\wallPaper
Ren C:\wallPaper\*.* *.png
explorer C:\Users\%username%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\
explorer C:\wallPaper

@ECHO success