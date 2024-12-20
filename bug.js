```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Only updates on first render, then never again.
    if (count === 0) {
      fetch('/api/data')
        .then(res => res.json())
        .then(data => {
          // ... use data ...
        });
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```