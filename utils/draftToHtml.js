import { convertToHTML, convertFromHTML } from "draft-convert";

export default function draftToHtml(draftContent) {
  console.log("Draft conent", draftContent);
  if (draftContent) {
    return convertToHTML(draftContent);
  }
  return "";
}
