
function deleteProduct(id) {
   const result = confirm("Are you sure you want to delete ?");
    if(result){
        fetch("/delete-Product/"+id,{
            method: 'POST',
        }).then(res => {
            if(res.ok){
                location.reload();
            }
        });
    }
}