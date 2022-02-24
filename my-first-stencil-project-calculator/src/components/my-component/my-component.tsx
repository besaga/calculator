import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>{this.getText()}
      <div class="app">
      <div class="calculator-grid">
          <h1>Calculator</h1>
      <div class="result">
        <div class="previus-result">j</div>
        <div class="current-result">n</div>
      </div>
      <div class="output">
            <button class="span-two-buttons">AC</button>
            <button>DEL</button>
            <button>/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>,</button>
            <button>0</button>
            <button class="span-two-buttons">=</button>
    </div>
    </div>
    </div>
    </div>;
    
  }
}
