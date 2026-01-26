# Agile Web - Digital Agency Platform 🚀

A modern, full-stack digital agency website built with **Django (Python)** and **PostgreSQL**. It features a fully dynamic Content Management System (CMS) for managing services, blogs, pricing, and leads.

## 🌟 Key Features
* **Dynamic CMS:** Manage Services, Sub-Services, Pricing, and Hero Slides from the Admin Panel.
* **SEO Optimized:** Dynamic meta tags and sitemap generation for high search ranking.
* **Lead Capture:** Functional contact forms with email notifications.
* **Modern UI:** Glassmorphism design using Materialize CSS and AOS animations.
* **Blog Engine:** Full markdown-ready blog system.

## 🛠️ Tech Stack
* **Backend:** Django 4.x, Python 3.9+
* **Database:** PostgreSQL
* **Frontend:** HTML5, CSS3, Materialize CSS, JavaScript
* **Deployment:** Docker / Gunicorn / Nginx ready

## 🚀 Quick Start

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/sikunaniket1234/agile_web.git](https://github.com/sikunaniket1234/agile_web.git)
    cd agile_web
    ```

2.  **Create Virtual Environment:**
    ```bash
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # Mac/Linux
    source venv/bin/activate
    ```

3.  **Install Dependencies:**
    ```bash
    pip install django psycopg2-binary
    ```

4.  **Database Migration:**
    *(Ensure Postgres is running and you have created a DB named 'agile_db')*
    ```bash
    python manage.py migrate
    ```

5.  **Run Server:**
    ```bash
    python manage.py runserver
    ```

## 📄 License
This project is licensed under the MIT License.
