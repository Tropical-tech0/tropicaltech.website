
//extract text from html string
const ExtractTextFromHTML = (htmlString: string) => {
    const tempEl = document.createElement('div');
    tempEl.innerHTML = htmlString;
    return tempEl.textContent || tempEl.innerText || '';
}

export default ExtractTextFromHTML