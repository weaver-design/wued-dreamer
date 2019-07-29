# Deploy in Ubuntu

This is the guide for how do you deploy your Nodejs App in Ubuntu.

```
useradd -m ubuntu

sudo ubuntu
```

``` linux
sudo apt-get update -y

sudo apt-get upgrade -y
```

## Git

``` linux
sudo apt install git
```

``` git
git clone https://github.com/weaver-design/wued-dreamer.git
```

## Nodejs

``` linux
wget https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-x64.tar.xz
tar xf  node-v10.16.0-linux-x64.tar.xz
cd node-v10.16.0-linux-x64/
./bin/node -v
sudo ln -s /home/ubuntu/node-v10.16.0-linux-x64/bin/node  /usr/local/bin/
sudo ln -s /home/ubuntu/node-v10.16.0-linux-x64/bin/npm  /usr/local/bin/
sudo ln -s /home/ubuntu/node-v10.16.0-linux-x64/bin/pm2  /usr/local/bin/
sudo ln -s /home/ubuntu/node-v10.16.0-linux-x64/bin/strapi  /usr/local/bin/
```

## MongoDB

``` linux
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
service mongod status
sudo systemctl enable mongod
```

## PM2

``` npm
npm i pm2 -g
```

``` npm
sudo NODE_ENV=production pm2 start server.js --name wued-dreamer
```
