```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will only run once on mount
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function: This will cause memory leak
    // return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```