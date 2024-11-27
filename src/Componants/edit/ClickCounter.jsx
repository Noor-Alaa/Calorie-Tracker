function ClickCounter(props) {
  const ClickCounterHundler = () => {
    props.setClickCounter((previous) => previous + 1);
  };
  return (
    <button type="button" onClick={ClickCounterHundler}>
      Click me
    </button>
  );
}

export default ClickCounter;
