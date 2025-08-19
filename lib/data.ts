export const siteData = {
  "employee": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@company.com",
    "department": "Engineering",
    "startDate": "2024-01-15",
    "manager": "Jane Smith"
  },
  "onboardingTasks": [
    {
      "id": 1,
      "title": "Complete Profile",
      "description": "Fill out personal information and emergency contacts",
      "category": "personal",
      "priority": "high",
      "estimatedTime": 15,
      "completed": true
    },
    {
      "id": 2,
      "title": "IT Setup",
      "description": "Configure laptop, email, and system access",
      "category": "technical",
      "priority": "high",
      "estimatedTime": 60,
      "completed": false
    },
    {
      "id": 3,
      "title": "Benefits Enrollment",
      "description": "Select health, dental, and retirement benefits",
      "category": "benefits",
      "priority": "medium",
      "estimatedTime": 30,
      "completed": false
    }
  ],
  "documents": [
    {
      "id": 1,
      "name": "Employee Handbook",
      "type": "handbook",
      "required": true,
      "status": "pending",
      "url": "/documents/handbook.pdf"
    },
    {
      "id": 2,
      "name": "Code of Conduct",
      "type": "policy",
      "required": true,
      "status": "signed",
      "url": "/documents/code-of-conduct.pdf"
    }
  ],
  "settings": {
    "theme": "light",
    "notifications": true,
    "emailReminders": true,
    "completionDeadline": "2024-01-30"
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "dashboard"
    },
    {
      "label": "Profile",
      "route": "/profile",
      "icon": "user"
    },
    {
      "label": "Documents",
      "route": "/documents",
      "icon": "file"
    },
    {
      "label": "Training",
      "route": "/training",
      "icon": "book"
    },
    {
      "label": "Checklist",
      "route": "/checklist",
      "icon": "check-square"
    }
  ],
  "footer": [
    {
      "label": "Help & Support",
      "route": "/help",
      "icon": "help-circle"
    },
    {
      "label": "Contact HR",
      "route": "/contact",
      "icon": "mail"
    }
  ]
};