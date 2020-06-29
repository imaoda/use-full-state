## introduction

react function component 中，使用 useState 只能一个个的创建，不像 class component 中那种 batch state，即所有 state 打包定义在一起

`use-full-state` 解决了这个诉求，和 class component 的 state 对齐

## usage

```typescript
import useFullState from 'use-full-state'

interface IState {
  name: string;
  id: number;
  friends: string[];
}

const [state, setState] = useFullState<IState>({
  name: '王永峰',
  id: 100,
  friends: ['兔子', '猴子']
});

function handleClick() {
  setState({name: 'wangyongfeng'}) // 支持部分设置 state，同 class component
}
```