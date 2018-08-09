
To run the application, 2 steps must be done.

1. HTTP backend server must be established, (I used EasyPHP Devserver 16.1) with PHP 5 version preferably. Once you have your back end on your localhost, simply place 'api.php' file from php folder of this application on your localhost and copy full address to state.server in App.js .
Also it is worth to uncomment ';extension=php_openssl' line in your php.ini config file if something went wrong.

2. Simply run 'npm install' in terminal and enjoy!