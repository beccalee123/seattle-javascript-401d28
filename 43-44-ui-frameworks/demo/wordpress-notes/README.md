mySQL User Create
```sql
CREATE USER 'john'@'localhost' IDENTIFIED WITH mysql_native_password  BY 'johnny';
GRANT ALL PRIVILEGES ON *.* TO 'john'@'localhost'
CREATE USER 'john'@'%' IDENTIFIED WITH mysql_native_password  BY 'johnny';
GRANT ALL PRIVILEGES ON *.* TO 'john'@'%';
```

Apache Setup
```xml
http.conf: LoadModule php7_module libexec/apache2/libphp7.so

In a custom .conf file in "other"
<Directory /Users/john/sites>
    AllowOverride all
    Options Indexes FollowSymLinks
    Require all granted
</Directory>

<VirtualHost *:80>
  ServerName php-demo
  DocumentRoot "/Users/john/sites/php-poc"
</VirtualHost>
```

nginx ...
```
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
```


PHP...
```php
index.php
<?

  $name = $_GET['name'];
  $colors = array("red", "green", "blue", "yellow");
  $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
  $ages['Peter'] = 35;
  $ages['Ben'] = 37;
  $ages['Joe'] = 43;


  echo "<h1>Hello $name, from php</h1>";


  echo "<h2>Colors</h2>";
  echo "<ul>";
  foreach ($colors as $value) {
    echo "<li>$value </li>";
  }
  echo "</ul>";

  echo "<h2>Ages</h2>";
  echo "<ul>";
  foreach ($age as $person=>$years) {
    echo "<li>$person - $years</li>";
  }
  echo "</ul>";


  echo "<h2>Ages (2)</h2>";
  echo "<ul>";
  foreach ($ages as $person=>$years) {
    echo "<li>$person - $years</li>";
  }
  echo "</ul>";

?>


...

index.php

<?

  include 'stuff.php';


  $greeting = getGreeting();
  $colors = getColors();
  $ages1 = getAges1();
  $ages2 = getAges2();

  echo $greeting;
  echo $colors;
  echo $ages1;
  echo $ages2;

  echo "<h2>Ages (2)</h2>";
  echo "<ul>";
  foreach ($ages2 as $person=>$years) {
    echo "<li>$person - $years</li>";
  }
  echo "</ul>";

?>


stuff.php
<?

  function getGreeting() {
    $name = $_GET['name'];
    return "<h1>Hello $name, from php</h1>";
  }

  function getColors() {
    $colors = array("red", "green", "blue", "yellow");
    $html = "<h2>Colors</h2>";
    $html .= "<ul>";
    foreach ($colors as $value) {
      $html .= "<li>$value </li>";
    }
    $html .= "</ul>";
    return $html;
  }

  function getAges1() {
    $ages = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
    $html .= "<h2>Ages</h2>";
    $html .= "<ul>";
    foreach ($ages as $person=>$years) {
      $html .= "<li>$person - $years</li>";
    }
    $html .= "</ul>";
    return $html;
  }


  function getAges2() {
    $ages['Peter'] = 35;
    $ages['Ben'] = 37;
    $ages['Joe'] = 43;
    return $ages;
  }

?>
```

