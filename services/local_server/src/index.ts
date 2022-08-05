import { app } from "@app/sale_api";
import { axApp } from "@app/ax_endpoint";

app.listen({ port: 4000, host: "0.0.0.0" });
axApp.listen({ port: 4001, host: "0.0.0.0" });
