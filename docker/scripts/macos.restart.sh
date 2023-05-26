#!/bin/bash
sudo brew services stop php@7.4
sudo brew services stop nginx
sudo brew services start php@7.4
sudo brew services start nginx
