const CopyCode = () => {
    const handleCopyText = () => {
        const codeToCopy = document.getElementById('codeToCopy').innerText;
        navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                console.log('Code copied to clipboard');
                // You can show a success message here if needed
            })
            .catch((error) => {
                console.error('Failed to copy code: ', error);
                // You can show an error message here if needed
            });
    };
    return (
        <>
              <section className="flex gap-2 m-16">
            <div id="codeToCopy" className="border rounded-lg p-2 bg-slate-100">
                {/* Your code here */}
                <p>This is the code you want to copy.</p>
                <p>This is the code you want to copy.</p>
            </div>
            <button onClick={handleCopyText} className='bg-blue-500 text-white p-2 font-bold'>Copy Text</button>
        </section>
        </>
    );
};

export default CopyCode;
