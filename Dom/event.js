function markRed(){
    document.body.style.backgroundColor =  'red'
    document.getElementById('h1tag').innerText =
     "dhurr beta eisob kicu hoilo ?"
}
function markYellow(){
    document.body.style.backgroundColor =  'yellow'
}

const blueButton = document.getElementById('blueButton')
blueButton.onclick = makeblue;

function makeblue(){
    document.body.style.backgroundColor =  'blue'
}

// 1. add button event handler
document.getElementById('submit-comment').addEventListener('click', function () {

    // 2. get user comment
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value;

    // 3. create comment paragraph
    const newComment = document.createElement('p');
    // newComment.innerText = commentBox.value;
    newComment.innerText = commentBox.value;

    // 4. append the comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    // 5. clean the comment box
    commentBox.value = '';
})