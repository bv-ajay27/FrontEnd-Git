const listItem = document.querySelectorAll('li');
const lists = document.querySelectorAll('.list');

let draggedItem = null;
for(let i=0;i<listItem.length;i++){
    const item = listItem[i];

    item.addEventListener('dragstart', function() {
        console.log('dragstart');
        draggedItem = item;
        setTimeout(function(){
            item.style.display = 'none';
        }, 0);
    });
    item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    for(let j=0;j<lists.length;j++){
            const list = lists[j];

            list.addEventListener('dragover',function(e){
                    e.preventDefault();
            });
            list.addEventListener('dragEnter',function(){
                e.preventDefault();
                this.style.backgroundColor = 'rgb(113, 154, 51)';
            });
            list.addEventListener('dragLeave',function(){
                this.style.backgroundColor = 'rgb(113, 154, 51)' ;
            });
            list.addEventListener('drop', function(){
                console.log('drop');
                this.append(draggedItem);
                this.style.backgroundColor = 'rgb(113, 154, 51)' ;
            });
    }
}