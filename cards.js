var cardIndex = 0;

fetch('data.txt')
  .then(response => response.text())
  .then(text => text.trim().split('\n'))
  .then((tagsImported) => {
    tagsImported.forEach((element) => {
        const newcard = document.createElement('div');
        newcard.classList.add('card');
        newcard.id = 'card'+cardIndex++;
        newcard.setAttribute('draggable', 'true');
        newcard.innerHTML = element;
        console.log(element);
        const bank = document.getElementById('bankRow');
        bank.appendChild(newcard);
        newcard.ondragstart = onDragStart;
        newcard.ondragend = onDragEnd;
    });
  });
  
  const rows = document.querySelectorAll('.row');

  const allowDrop = (event) => {
      event.preventDefault();
  }
  
  const onDrop = (event, element) => {
      event.preventDefault();
      const draggedCardId = event.dataTransfer.getData('id');
      console.log(draggedCardId);
      const draggedCard = document.getElementById(draggedCardId);
      console.log('Caught '+draggedCardId);
      element.appendChild(draggedCard);
      console.log('Element Dropped');
  }
  
  rows.forEach((row) => {
      row.ondragover = allowDrop;
  })
  
  const card = document.querySelectorAll('.card');
  
  const onDragStart = (event) => {
      console.log('Dragging Element')
      event.dataTransfer.setData('id', event.target.id);
  }
  
  const onDragEnd = (event) => {
      console.log('Dragging Ended');
  }
  
  card.forEach((card) => {
      card.ondragstart = onDragStart;
      card.ondragend = onDragEnd;
  })

 