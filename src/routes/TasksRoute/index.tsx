import { memo, useState } from "react";
import { Layout } from "../../modules";
import { Title, Card } from "../../components";

import * as cn from "./Tasks.module.css";

const getParams = data => data.split(',');

export const TasksRoute = memo(() => {
    const [newTasks, setNewTasks] = useState(['Task2', 'Task3', 'Task4']);
    const [compleatedTasks, setCompleatedTasks] = useState(['Task 1']);

    const onDragStart = (list, id) => (event) => {
        event.dataTransfer.setData("text/plain", `${list},${id}`);
    };

    const onDragOver = (type:string) => (event) => {
        event.preventDefault();
    };

    const onTodoListDrop = (event) => {
        event.preventDefault();

        const data = event.dataTransfer.getData("text/plain");
        const [startList, task] = getParams(data);

        if (startList !== 'new') {
            setNewTasks(prev => [task, ...prev]);
            setCompleatedTasks(prev => prev.filter(item => item !== task));
        }
    };

    const onDoneListDrop = (event) => {
        event.preventDefault();

        const data = event.dataTransfer.getData("text/plain");
        const [startList, task] = getParams(data);

        if (startList !== 'compleated') {
            setCompleatedTasks(prev => [task, ...prev]);
            setNewTasks(prev => prev.filter(item => item !== task));
        }
    };

    return (
        <Layout>
            <Title tag="h3">Tasks</Title>

            <div className={cn.board}>
                <Card title="TO DO" onDragOver={onDragOver('new')} onDrop={onTodoListDrop}>
                    {newTasks.map(task => <div key={task} className={cn.task} onDragStart={onDragStart('new', task)} draggable>{task}</div>)}
                </Card>

                <Card title="DONE" onDragOver={onDragOver('compleated')} onDrop={onDoneListDrop}>
                    {compleatedTasks.map(task => <div key={task} className={cn.task} onDragStart={onDragStart('compleated', task)} draggable>{task}</div>)}
                </Card>
            </div>
        </Layout>
    );
});