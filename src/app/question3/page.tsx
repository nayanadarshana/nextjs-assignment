export default function Page() {
  function twoSum(numbers: number[], target: number) {
    for (let i = 0; i <= numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [
            numbers.indexOf(numbers[i]) + 1,
            numbers.indexOf(numbers[j]) + 1,
          ];
        }
      }
    }
  }
  console.log(twoSum([1, 2, 3, 4, 5, 6], 6));
  return (
    <>
      <div></div>
    </>
  );
}
