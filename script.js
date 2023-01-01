window.addEventListener('DOMContentLoaded', () => {

    function onEntry (entry, getClass){
        entry.forEach( (change)=>{
            if(change.isIntersecting) {
                change.target.classList.remove(getClass);
                change.target.classList.add('animated');
            }
        });
    }
    
    function startAnimation(getClass) {
        const elements = document.querySelectorAll(`.${getClass}`)
        elements.forEach(element => {
            let observer = new IntersectionObserver((e)=>{
                onEntry(e, getClass);
            }, {threshold:[0.7]});
            observer.observe( element );
        });
    }

    startAnimation("left");
    startAnimation("right");
    startAnimation("custom");

});