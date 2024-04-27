

const CopyInput = () => {
    // copy text
    const handleCopy = (e) => {
     e.preventDefault();
     var textInput = e.target.inputField.value;
     console.log(textInput)
    navigator.clipboard.writeText(textInput)
    .then(()=>{
        console.log('text copied successfully');
    });
  
 }
return (
 <div>
         <div>
     <form className='flex gap-2 m-16' onSubmit={handleCopy}>
     <input type='text' name='inputField' className='border rounded-md p-2 w-5/6'></input>
 <button type='submit' name='submit' className='bg-blue-500 text-white p-2 w-1/6'>Copy</button>
     </form>
 </div>
 </div>
);
};

export default CopyInput;