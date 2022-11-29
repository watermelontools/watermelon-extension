import axios from "axios";
import { backendURL } from "../../constants";
import analyticsReporter from "../vscode/reporter";

export default async function postCommentOnIssue({
  email,
  owner,
  repo,
  comment_body,
  issue_number,
}: {
  email: string;
  owner: string;
  repo: string;
  comment_body: string;
  issue_number: number;
}) {
  const issues = await axios
    .post(`${backendURL}/api/github/postCommentOnIssue`, {
      user: email,
      repo,
      owner,
      comment_body,
      issue_number,
    })
    .then((res) => res.data)
    .catch((err) => {
      let reporter = analyticsReporter();
      let { message } = err;
      reporter?.sendTelemetryException(err, { error: message });
    });
  return issues.items;
}