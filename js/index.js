// Agregar plugin
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  


//se busca el elemento al cual se le quiere añadir un evento
document.querySelector("#registrar-btn").addEventListener("click",() => {
    //value es para obtener el valor de los input de texto
    let nombre = document.querySelector("#nombre-txt").value;
    //Esto lo saque de la pagina del tinymce, es para obtener lo escrito.
    let descripcion = tinymce.get("descripcion-txt").getContent();
    // checked indica si el radio button esta seleccionado
    let legendario = document.querySelector("#legendario-no").checked;
    //el tipo select se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;


    console.log("Hola Mundo ", nombre, descripcion, legendario, tipo);
});