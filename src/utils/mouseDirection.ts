type OptionsType = {
  element: HTMLElement;
  content: HTMLElement;
  leftMoveCallback: () => void;
  rightMoveCallback: () => void;
};
export class MouseDirection {
  private element: HTMLElement;
  private content: HTMLElement;
  private leftMoveCallback: () => void;
  private rightMoveCallback: () => void;
  private isMoveDown: boolean = false;
  private direction: "" | "left" | "right" = "";
  private mouseDownCoord: number = 0;
  constructor({
    element,
    content,
    leftMoveCallback,
    rightMoveCallback,
  }: OptionsType) {
    this.element = element;
    this.content = content;
    this.leftMoveCallback = leftMoveCallback;
    this.rightMoveCallback = rightMoveCallback;
    this.bind();
  }
  bind() {
    const { element } = this;
    element.addEventListener("mousedown", this.onMoseDown);
    element.addEventListener("mousemove", this.onMoseMove);
    element.addEventListener("mouseup", this.onMoseUp);
  }
  onMoseDown = (event: MouseEvent) => {
    this.isMoveDown = true;
    this.content.style.transition = "none";
    this.mouseDownCoord = event.offsetX;
  };
  onMoseUp = (event: MouseEvent) => {
    this.isMoveDown = false;
    this.content.style.transition = "all 0.3s";
    this.content.style.transform = "translateX(0px)";
    if (this.direction === "left") {
      this.leftMoveCallback();
    }
    if (this.direction === "right") {
      this.rightMoveCallback();
    }
    this.direction = "";
  };
  onMoseMove = (event: MouseEvent) => {
    if (!this.isMoveDown) return;
    const distance = event.offsetX - this.mouseDownCoord;
    if (distance > 0) {
      this.direction = "right";
      this.content.style.transform = `translateX(${distance}px)`;
    }
    if (distance < 0) {
      this.direction = "left";
      this.content.style.transform = `translateX(${distance}px)`;
    }
  };
}
