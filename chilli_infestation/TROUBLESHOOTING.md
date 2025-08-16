# Troubleshooting Guide

This guide helps resolve common issues when running the Chilli Infestation Detection application.

## Issue: `net::ERR_CONNECTION_REFUSED` or `Network Error`

This is the most common error and occurs when the frontend application cannot connect to the backend AI service.

### Step 1: Verify the Backend Server is Running

The backend is a separate application that must be running for the frontend to work.

1.  Open a **new terminal window**.
2.  Navigate to your backend project's directory (this is likely a different folder from your Next.js app).
3.  Activate your Python virtual environment if you have one.
    ```bash
    source venv/bin/activate
    ```
4.  Start the backend server. The command is typically one of the following:
    ```bash
    # For Flask
    flask run

    # Or a custom script
    python app.py
    ```
5.  When the server starts, it should print a message indicating the address it's running on, which should match the one in your frontend configuration.
    ```
    * Running on http://127.0.0.1:5000
    ```

### Step 2: Check the Host and Port

Ensure the backend is configured to run on `127.0.0.1` (or `localhost`) and port `5000`.

-   In your frontend code, the API base URL is configured in `/lib/api.ts`. It is currently set to `http://127.0.0.1:5000`.
-   Your backend server must be listening on this exact address. If your backend is running on a different port (e.g., 8000), you must update the `baseURL` in `/lib/api.ts` to match it.

### Step 3: Test the Backend Directly

You can use a tool like `curl` to check if the backend endpoint is responding, completely bypassing the frontend.

1.  Open a terminal.
2.  Run the following command. This sends a simple request to see if the server is alive.
    ```bash
    curl -v http://127.0.0.1:5000/upload_plant
    ```
-   **If you get a response** (like a `405 Method Not Allowed` or `400 Bad Request`), it means the server is running! The problem might be something else.
-   **If you get `curl: (7) Failed to connect to 127.0.0.1 port 5000: Connection refused`**, it confirms the server is **not running** or is on a different address. Go back to Step 1.

### Step 4: Check for Firewalls

In rare cases, a local firewall could be blocking the connection between applications on your own machine. Ensure that your operating system's firewall or any antivirus software is not blocking connections to port `5000`.
