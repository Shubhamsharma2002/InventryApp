

import multer from "multer";
// const storageAdd = multer.diskStorage({
//     destination: function (req, file, cb) => {
//       cb(null, 'public/image/')
//     },
//     filename:  (req, file, cb)=> {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     },
//   })

const storageAdd = multer.diskStorage({
    destination:(req,file, cb) =>{
        cb(null,'public/image/');
    },
    filename:(req, file, cb)=>{
        const name = Date.now() + '-' + file.originalname;
        cb(null,name);
    },
});
  
  export  const  uploadfile = multer({ storage: storageAdd });