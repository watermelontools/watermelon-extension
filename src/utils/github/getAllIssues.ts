import axios from "axios";
import { backendURL } from "../../constants";
import analyticsReporter from "../vscode/reporter";

export default async function getAllIssues({ email }: { email: string }) {
  const allIssues = await axios
    .post(`${backendURL}/api/github/getAllIssues`, {
      user: email,
    })
    .then((res) => res.data)
    .catch((err) => {
      let reporter = analyticsReporter();
      let { message } = err;
      reporter?.sendTelemetryException(err, { error: message });
    });

  return allIssues;
}