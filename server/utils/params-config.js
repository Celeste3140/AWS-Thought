const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      // Replace the <My_Bucket_Name> with the name of your own S3 bucket
      Bucket: 'user-images-304bdb6a-1b02-4699-bb30-729210ed75e1',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
    };
  
    return imageParams;
  };

  module.exports = params;