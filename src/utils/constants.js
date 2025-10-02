// this file is used to create constants that remain same overall in the project

export const UserRolesEnum = {
    ADMIN: 'admin',
    PROJECT_ADMIN: 'project-admin',
    MEMBER: 'member'
}

export const AvailableUserRoles = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in-progress",
    DONE: "done"
}

export const AvailableTaskStatus = Object.values(TaskStatusEnum);``