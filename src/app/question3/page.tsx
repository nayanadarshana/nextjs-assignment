export default function Page() {
  function twoSum(numbers: number[], target: number) {
    for (let i = 0; i <= numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [numbers.indexOf(numbers[i]), numbers.indexOf(numbers[j])];
        }
      }
    }
  }
  console.log(twoSum([-1, 0], -1));
  return (
    <>
      <div></div>
    </>
  );
}
