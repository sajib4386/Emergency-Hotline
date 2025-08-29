### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans:**
1.When a specific element is needed, getElementById is used. It is determined by id.

2.When several elements are needed together for a task, getElementsByClassName is used. It is determined by CSS class.

3.When the first element is needed, querySelector is used. It is determined by CSS selector.

4.When all elements are needed, querySelectorAll is used. It is determined by CSS selector.

---

### How do you create and insert a new element into the DOM?

**Ans:**
```js
// Create a new paragraph element
const p = document.createElement("p");

// Add content
p.textContent = "Hello, I am a new paragraph.";

// Add new element
document.body.appendChild(p);


### What is Event Bubbling and how does it work?
**Ans :** 
        When I use an event in the DOM, Event Bubbling is a process where the event first occurs on the target element 
        and then gradually moves up to the parent elements.

### What is Event Delegation in JavaScript? Why is it useful?
**Ans :**   
        Event Delegation is a process where I use an event listener on a parent element, and the event can be handled 
        on its child elements.

### What is the difference between preventDefault() and stopPropagation() methods?
**Ans :** 
      1. preventDefault() is a method that stops the default behavior of an event.
      2. stopPropagation() is a method that prevents the event from bubbling to parent elements.




