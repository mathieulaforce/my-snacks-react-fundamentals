import { memo, useCallback, useState, type ReactNode } from 'react';
import { RenderBox } from './renderBox';
import './index.css';

function Grandchild() {
  return (
    <RenderBox
      name="Grandchild"
      note="Also re-renders: it's below the parent."
    />
  );
}

function NoPropsChild() {
  return (
    <RenderBox
      name="NoPropsChild"
      note="Has no props, yet re-renders whenever Parent does."
    >
      <Grandchild />
    </RenderBox>
  );
}

function CountDisplay({ count }: { count: number }) {
  return (
    <RenderBox name="CountDisplay" note={`Gets count as a prop: ${count}`} />
  );
}

function OwnStateChild() {
  const [likes, setLikes] = useState(0);
  return (
    <RenderBox
      name="OwnStateChild"
      note="Click my button: ONLY I re-render. Parent doesn't."
    >
      <button className="btn" onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </RenderBox>
  );
}

function Wrapper({ children }: { children: ReactNode }) {
  const [clicks, setClicks] = useState(0);
  return (
    <RenderBox
      name="Wrapper"
      note="Click my button: I re-render, but the child I wrap doesn't."
    >
      <button className="btn" onClick={() => setClicks(clicks + 1)}>
        👆 {clicks}
      </button>
      <Grandchild />
      {children}
    </RenderBox>
  );
}

function WrappedChild() {
  return (
    <RenderBox
      name="WrappedChild"
      note="Created by Parent, not by Wrapper. Only Parent's renders reach me."
    />
  );
}

// memo(): "skip re-rendering if props are the same".
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MemoChild = memo(function MemoChild(_props: { onClick?: () => void }) {
  return (
    <RenderBox
      name="MemoChild"
      note="Wrapped in memo(): props didn't change, so it skips re-rendering."
    />
  );
});

export default function RenderView() {
  const [count, setCount] = useState(0);
  const onClick = () => {};
  // eslint-disable-next-line react-hooks/use-memo
  const onClickCb = useCallback(onClick, []);

  return (
    <RenderBox name="Parent" note="Owns the `count` state.">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        count + 1 (now {count})
      </button>
      <div className="render-children">
        <NoPropsChild />
        <CountDisplay count={count} />
        <OwnStateChild />
        <Wrapper>
          <WrappedChild />
        </Wrapper>
        <MemoChild />
        {/* why does this not work? */}
        <MemoChild onClick={onClick} />
        <MemoChild onClick={onClickCb} />
      </div>
    </RenderBox>
  );
}
