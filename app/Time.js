const TimeInput = ({ time, onTimeChange }) => {
  return (
    <input
      type="time"
      value={time}
      onChange={(e) => onTimeChange(e.target.value)}
    />
  );
};

export default TimeInput;
