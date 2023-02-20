import * as upload from "@/apis/upload";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
export default class {
  editor: Editor;
  isFullscreen!: boolean;
  constructor(el: string, initValue: string, public height: string) {
    this.editor = new Editor({
      el: document.querySelector(el)!,
      previewStyle: "vertical",
      height: height,
      initialEditType: "markdown",
      initialValue: initValue,
      toolbarItems: this.toolbar() as [],
    });
    this.ImageHook();
  }
  private ImageHook() {
    // 默认上传图片时base64的，
    this.editor.removeHook("addImageBlobHook");
    this.editor.addHook(
      "addImageBlobHook",
      async (blob: any, callback: any) => {
        const form = new FormData();
        form.append("file", blob, blob.name);
        const response = await upload.uploadImage(form);

        callback(response.data.url, blob.name);
      }
    );
  }
  private toolbar() {
    return [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      ["code", "codeblock"],
      [
        {
          el: this.fullscreen(),
          command: "fullscreen",
          tooltip: "fullscreen",
        },
      ],
    ];
  }
  private fullscreen() {
    const button: HTMLButtonElement = document.createElement("button");
    button.innerHTML = "全屏";
    button.style.margin = "0px";
    button.addEventListener("click", () => {
      this.toggleFullscreen();
    });
    document.documentElement.addEventListener(
      "keyup",
      (event: KeyboardEvent) => {
        if (event.key === "Escape" && this.isFullscreen) {
          this.toggleFullscreen();
        }
      }
    );
    return button;
  }
  private toggleFullscreen() {
    const editorEl = document.querySelector(
      ".toastui-editor-defaultUI"
    ) as HTMLDivElement;
    editorEl.classList.toggle("fullscreen");
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen === false) {
      this.editor.setHeight(this.height);
    } else {
      this.editor.setHeight("100vh");
    }
    this.editor.focus();
  }
}
