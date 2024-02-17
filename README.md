# Django Library Management System

This is a simple Django web application for managing a library's book lending services.

## Features

- Interface for borrowing books
- System for tracking borrowed books and returns
- Responsive web design using Bootstrap

## Local Development Setup

1. Make sure you have Python 3.8+ and pip installed.
2. Install Django and psycopg2-binary to interact with PostgreSQL:

```bash
pip install django psycopg2-binary
```

3. Configure the database settings in `settings.py` with your PostgreSQL credentials.
4. Run migrations to create the database schema:

```bash
python manage.py makemigrations
python manage.py migrate
```

5. Start the server:

```bash
python manage.py runserver
```

Access the web interface at `localhost:8000`.

## Configuration

Before running the project, update the following settings in `django_library/settings.py`:

- `SECRET_KEY`: Set this to a secret value in production.
- `DEBUG`: Set to `False` in production.
- `DATABASES`: Set with your PostgreSQL database settings.

## Deployment

Consult the Django deployment checklist when deploying the project to a live system.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.
