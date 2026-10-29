import { createElement } from 'react';

const withoutJsx = createElement(
  'h1',
  { className: 'hello' },
  'Hello, snack lovers',
);
const withJsx = <h1 className="hello">Hello, snack lovers</h1>;

const snackCount = 15;

export default function IntroView() {
  // return <h1 class="hello">Hello</h1>;
  // return   <h1>Hello</h1> <p>World</p>

  return (
    <div className="side-by-side">
      <div>
        <p className="label">createElement(…)</p>
        {withoutJsx}
      </div>
      <div>
        <p className="label">JSX</p>
        {withJsx}
        <p>
          Today we rank <strong>{snackCount}</strong> snacks. I wish it was
          double that amount = {snackCount * 2}
        </p>
      </div>
    </div>
  );
}
