function deleteproduct(id){
         const result =  confirm("Are you sure to delete this product !");
         if(result){
            fetch("/delete/"+id,{
                method:"post"
            }).then(res =>{
                if(res.ok){
                    location.reload();
                }
            })
         }
}