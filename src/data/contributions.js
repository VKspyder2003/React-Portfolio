export const contributionsData = [
    {
        repository: "WeblateOrg/weblate",
        title: "checks: make Kashida check less aggressive",
        description: "Updated character validation checks with Unicode-aware matching for Arabic script to prevent false positives and added robust testing suites.",
        technologies: ["Python", "Regex", "Unicode", "Testing"],
        url: "https://github.com/WeblateOrg/weblate/pull/21003",
        accent: "cyan",
        pr: "PR #21003",
        status: "Merged"
    },
    {
        repository: "WeblateOrg/weblate",
        title: "Return 202 Accepted for asynchronous project deletion API",
        description: "Updated project deletion REST API endpoint to return 202 Accepted response with Celery task metadata status URL, extending schema docs and tests.",
        technologies: ["Python", "Django", "Celery", "OpenAPI"],
        url: "https://github.com/WeblateOrg/weblate/pull/21020",
        accent: "cyan",
        pr: "PR #21020",
        status: "Open"
    },
    {
        repository: "oracle/opengrok",
        title: "Bound pathological addFile() cost by truncating REFS tokenization",
        description: "Limited pathological symbol indexing costs by introducing an emitted-token limit in JFlexTokenizer for the REFS field and added JUnit regression test suites.",
        technologies: ["Java", "JFlex", "Tokenization", "JUnit"],
        url: "https://github.com/oracle/opengrok/pull/4994",
        accent: "cyan",
        pr: "PR #4994",
        status: "Open"
    },
    {
        repository: "Johin2/self-heal",
        title: "Add RepairResult report export and --report CLI option",
        description: "Implemented report export capabilities (JSON/JSONL serialization) for RepairResult, unified diff-based traces, and added a --report CLI flag.",
        technologies: ["Python", "Serialization", "CLI", "Testing"],
        url: "https://github.com/Johin2/self-heal/pull/82",
        accent: "teal",
        pr: "PR #82",
        status: "Merged"
    }
];
