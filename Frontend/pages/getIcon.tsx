import useSWR from 'swr';

export default function getIcon(fileName: string) {
    if (fileName === "bitcoin") {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_1347)">
                    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F7931A" />
                    <path d="M23.032 14.02C23.346 11.924 21.749 10.797 19.567 10.045L20.275 7.205L18.547 6.775L17.857 9.54C17.403 9.426 16.937 9.32 16.472 9.214L17.167 6.431L15.439 6L14.731 8.839C14.355 8.753 13.985 8.669 13.627 8.579L13.629 8.57L11.245 7.975L10.785 9.821C10.785 9.821 12.068 10.115 12.041 10.133C12.741 10.308 12.867 10.771 12.846 11.139L12.04 14.374C12.088 14.386 12.15 14.404 12.22 14.431L12.037 14.386L10.907 18.918C10.821 19.13 10.604 19.449 10.114 19.328C10.132 19.353 8.858 19.015 8.858 19.015L8 20.993L10.25 21.554C10.668 21.659 11.078 21.769 11.481 21.872L10.766 24.744L12.493 25.174L13.201 22.334C13.673 22.461 14.131 22.579 14.579 22.691L13.873 25.519L15.601 25.949L16.316 23.083C19.264 23.641 21.48 23.416 22.413 20.75C23.165 18.604 22.376 17.365 20.825 16.558C21.955 16.298 22.805 15.555 23.032 14.02ZM19.082 19.558C18.549 21.705 14.934 20.544 13.762 20.253L14.712 16.448C15.884 16.741 19.641 17.32 19.082 19.558ZM19.617 13.989C19.13 15.942 16.122 14.949 15.147 14.706L16.007 11.256C16.982 11.499 20.125 11.952 19.617 13.989Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_0_1347">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    if (fileName === "ethereum") {
        return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_108)">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA" />
                <path d="M16 4V12.87L23.497 16.22L16 4Z" fill="white" fill-opacity="0.602" />
                <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white" />
                <path d="M16 22.352V28.379L23.502 18L16 22.352Z" fill="white" fill-opacity="0.602" />
                <path d="M16.498 28.379V22.351L9 18L16.498 28.379Z" fill="white" />
                <path d="M16 20.701L23.497 16.348L16 13V20.701Z" fill="white" fill-opacity="0.2" />
                <path d="M9 16.348L16.498 20.701V13L9 16.348Z" fill="white" fill-opacity="0.602" />
            </g>
            <defs>
                <clipPath id="clip0_0_108">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
        )
    }
    if (fileName === "dogecoin") {
        return (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_258)">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#C3A634" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.248 14.61H17.562V16.896H13.248V21.714H15.969C17.046 21.714 17.927 21.569 18.613 21.277C19.299 20.986 19.837 20.583 20.228 20.067C20.6279 19.5304 20.9001 18.9097 21.024 18.252C21.1685 17.5102 21.2388 16.7558 21.234 16C21.2388 15.2442 21.1685 14.4898 21.024 13.748C20.9003 13.0903 20.628 12.4695 20.228 11.933C19.837 11.417 19.298 11.014 18.613 10.723C17.927 10.431 17.046 10.286 15.969 10.286H13.248V14.611V14.61ZM10.482 16.896H9V14.611H10.482V8H17.031C18.241 8 19.288 8.21 20.173 8.627C21.058 9.046 21.78 9.617 22.341 10.342C22.901 11.066 23.318 11.914 23.591 12.885C23.864 13.856 24 14.895 24 16C24.0069 17.0522 23.8689 18.1004 23.59 19.115C23.318 20.085 22.901 20.934 22.34 21.658C21.78 22.383 21.058 22.954 20.173 23.373C19.288 23.791 18.24 24 17.031 24H10.482V16.896Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_0_258">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
        )
    }

}