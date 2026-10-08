import express from "express";
import cors from "cors";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(__dirname, "../../client/dist");

app.use(cors());
app.use(express.json());

let tasks = [
  { id: "1", title: "Design API contract", description: "Define REST endpoints and response models.", status: "done", priority: "high", createdAt: new Date().toISOString() },
  { id: "2", title: "Build dashboard UI", description: "Create responsive task dashboard components.", status: "in-progress", priority: "high", createdAt: new Date().toISOString() },
  { id: "3", title: "Add deployment pipeline", description: "Prepare CI checks and deployment configuration.", status: "todo", priority: "medium", createdAt: new Date().toISOString() }
];

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "taskflow-api" }));
app.get("/api/tasks", (_req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const { title, description = "", priority = "medium" } = req.body;
  if (!title?.trim()) return res.status(400).json({ error: "Title is required" });

  const task = {
    id: randomUUID(),
    title: title.trim(),
    description,
    priority,
    status: "todo",
    createdAt: new Date().toISOString()
  };

  tasks = [task, ...tasks];
  res.status(201).json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const i = tasks.findIndex((t) => t.id === req.params.id);
  if (i < 0) return res.status(404).json({ error: "Task not found" });

  tasks[i] = { ...tasks[i], ...req.body };
  res.json(tasks[i]);
});

app.delete("/api/tasks/:id", (req, res) => {
  const before = tasks.length;
  tasks = tasks.filter((t) => t.id !== req.params.id);
  if (before === tasks.length) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
});

// In production, Express serves the built React app from the same service.
app.use(express.static(clientDist));
app.get(/^(?!\/api(?:\/|$)).*/, (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(PORT, () => console.log(`TaskFlow running on port ${PORT}`));
