rm -r src
mkdir src
cd src
mkdir components
cd components

git clone https://github.com/DeltaDrop/dd-ProductInfo.git

cd dd-ProductInfo
npm install;
npm run seed;
npm run react-dev;
npm start;