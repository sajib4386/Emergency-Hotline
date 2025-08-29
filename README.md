### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans:**  

     * When a specific element is needed, getElementById is used. It is determined by id.

     * When several elements are needed together for a task, getElementsByClassName is used. It is determined by CSS class.

     * When the first element is needed, querySelector is used. It is determined by CSS selector.

     * When all elements are needed, querySelectorAll is used. It is determined by CSS selector.


### 2. How do you create and insert a new element into the DOM?

**Ans:**
```js
// Create a new paragraph element
const p = document.createElement("p");

// Add content
p.textContent = "Hello, I am a new paragraph.";

// Add new element
document.body.appendChild(p);

```

### 3. What is Event Bubbling and how does it work?
**Ans :** 
        When I use an event in the DOM, Event Bubbling is a process where the event first occurs on the target element 
        and then gradually moves up to the parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?
**Ans :**
        Event Delegation is a process where I use an event listener on a parent element, and the event can be handled 
        on its child elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
**Ans :**  
      * preventDefault() is a method that stops the default behavior of an event.  
      * stopPropagation() is a method that prevents the event from bubbling to parent elements.




