document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const urlInput = document.getElementById('url');
    const resultsContainer = document.getElementById('results-container');
    const loading = document.getElementById('loading');
    const postContent = document.getElementById('post-content');
    const copyBtn = document.getElementById('copy-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    
    generateBtn.addEventListener('click', generatePost);
    regenerateBtn.addEventListener('click', generatePost);
    copyBtn.addEventListener('click', copyToClipboard);
    
    function generatePost() {
        const url = urlInput.value.trim();
        
        if (!url) {
            alert('Please enter a valid URL');
            return;
        }
        
        // Get selected prompt type
        let promptType = "two";
        if (document.getElementById('prompt-one').checked) {
            promptType = "one";
        }
        
        // Show loading state
        resultsContainer.classList.remove('hidden');
        loading.classList.remove('hidden');
        document.getElementById('result-content').classList.add('hidden');
        postContent.textContent = '';
        
        // Send request to FastAPI server : http://localhost:8000
        fetch('/generate', {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: url,
                prompt_type: promptType
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loading.classList.add('hidden');
            document.getElementById('result-content').classList.remove('hidden');
            postContent.textContent = data.post;
            
            // Scroll to results
            resultsContainer.scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
            loading.classList.add('hidden');
            document.getElementById('result-content').classList.remove('hidden');
            postContent.textContent = 'Error: ' + error.message;
        });
    }
    
    function copyToClipboard() {
        const content = postContent.textContent;
        
        navigator.clipboard.writeText(content)
            .then(() => {
                // Change button text temporarily
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Copied!';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            })
            .catch(err => {
                alert('Failed to copy: ' + err);
            });
    }
});
