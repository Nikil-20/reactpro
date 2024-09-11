const students = [
    {
        "misNo": "112103001",
        "studentName": "AARYA ROHIT KAWALAY",
        "sgpa": 6.39,
        "cgpa": 6.89,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "CC", "BC", "AB", "CD", "BC", "DD", "BC", "CC", "CD", "PP"],
            "pointers": ["9", "6", "7", "8", "5", "7", "4", "7", "6", "5", "10"]
        }
    },
    {
        "misNo": "112103002",
        "studentName": "AAYUSH SHRIKANT ATHAWALE",
        "sgpa": 5.22,
        "cgpa": 6.34,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["BC", "CC", "DD", "AB", "DD", "DD", "FF", "DD", "DD", "FF", "PP"],
            "pointers": ["7", "6", "4", "8", "4", "4", "0", "4", "4", "0", "10"]
        }
    },
    {
        "misNo": "112103003",
        "studentName": "ABHANG ANUJ PRAVIN",
        "sgpa": 7.42,
        "cgpa": 6.94,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["BB", "BB", "AB", "BB", "AB", "AB", "AB", "AB", "AB", "BB", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "9", "9", "9", "9", "8", "10"]
        }
    },
    {
        "misNo": "112103004",
        "studentName": "ABHINAV KURULE",
        "sgpa": 8.35,
        "cgpa": 8.94,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AA", "AB", "AB", "AB", "AA", "AA", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["10", "9", "9", "9", "10", "10", "9", "9", "9", "9", "10"]
        }
    },
    {
        "misNo": "112103006",
        "studentName": "AISHWARYA PRAKASH KOLI",
        "sgpa": 6.30,
        "cgpa": 6.45,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "BC", "BC", "AB", "BC", "BC", "CC", "DD", "CC", "CC", "PP"],
            "pointers": ["9", "7", "7", "9", "7", "7", "6", "5", "6", "6", "10"]
        }
    },
    {
        "misNo": "112103007",
        "studentName": "AJABE VISHAL ASHOK",
        "sgpa": 8.09,
        "cgpa": 8.41,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AA", "BC", "AB", "AB", "AB", "AB", "AB", "AB", "AA", "AB", "PP"],
            "pointers": ["10", "7", "9", "9", "9", "9", "9", "9", "10", "9", "10"]
        }
    },
    {
        "misNo": "112103008",
        "studentName": "AMAAN NAYEEM JAMADAR",
        "sgpa": 7.91,
        "cgpa": 8.04,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "BB", "AB", "BB", "AB", "BB", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "8", "9", "8", "9", "8", "10"]
        }
    },
    {
        "misNo": "112103009",
        "studentName": "ANANTA DINESH HATWAR",
        "sgpa": 6.74,
        "cgpa": 6.12,
        "subjects": {
            "codes": [
                "Engineering Economics",
                "Advanced Data Structures Laboratory",
                "System Programming",
                "Mini Project",
                "Operating Systems",
                "Advanced Data Structures",
                "Data Structures and Algorithms - II Laboratory",
                "Web Systems and Technologies",
                "Big Data Analytics",
                "Microprocessor Techniques",
                "Financial Derivatives and Structuring"
            ],
            "grades": ["AB", "BB", "AB", "BB", "AB", "BB", "AB", "AB", "AB", "AB", "PP"],
            "pointers": ["8", "8", "9", "8", "9", "8", "9", "8", "9", "8", "10"]
        }
    },
    {
        "misNo": "112103010",
        "studentName": "ANUSHKA VINOD MORE",
        "sgpa": 8.39,
        "cgpa": 7.79,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AB", "AB", "BC", "AB", "BB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "9", "9", "7", "9", "8", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103011",
        "studentName": "APTE MOHIT PARAG",
        "sgpa": 8.91,
        "cgpa": 9.29,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103012",
        "studentName": "ARU PAWAN JAGANNATH",
        "sgpa": 5.70,
        "cgpa": 5.79,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CD", "CD", "DD", "CC", "CC", "DD", "DD", "PP"],
          "pointers": ["7", "5", "6", "5", "5", "4", "6", "6", "4", "4", "0"]
        }
      },
      {
        "misNo": "112103013",
        "studentName": "ARYAN SHIRISH THAKRE",
        "sgpa": 8.35,
        "cgpa": 7.96,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103014",
        "studentName": "ATHARVA ASHUTOSH MUTSADDI",
        "sgpa": 9.00,
        "cgpa": 9.24,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103015",
        "studentName": "AYUSH SAGAR AMBHORKAR",
        "sgpa": 9.30,
        "cgpa": 9.52,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103016",
        "studentName": "BADARKHE HARIOM DNYANESHWAR",
        "sgpa": 6.78,
        "cgpa": 7.01,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CD", "CD", "BC", "CC", "BC", "CD", "BC", "PP"],
          "pointers": ["7", "5", "6", "5", "5", "7", "6", "7", "5", "7", "0"]
        }
      },
      {
        "misNo": "112103017",
        "studentName": "BADGUJAR VAISHNAVI RAVINDRA",
        "sgpa": 8.61,
        "cgpa": 8.44,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["AB", "AA", "AB", "AB", "AB", "AB", "AA", "AB", "AB", "AB", "PP"],
          "pointers": ["9", "10", "9", "9", "9", "9", "10", "9", "9", "9", "0"]
        }
      },
      {
        "misNo": "112103018",
        "studentName": "BAVISKAR ADITYA PRAMOD",
        "sgpa": 7.48,
        "cgpa": 7.24,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CD", "CC", "CC", "CC", "CD", "CC", "CD", "PP"],
          "pointers": ["7", "5", "6", "5", "6", "6", "6", "5", "6", "5", "0"]
        }
      },
      {
        "misNo": "112103019",
        "studentName": "BHORE VISHAL KISHOR",
        "sgpa": 7.92,
        "cgpa": 7.65,
        "subjects": {
          "codes": [
            "Engineering Economics",
            "Advanced Data Structures Laboratory",
            "System Programming",
            "Mini Project",
            "Operating Systems",
            "Advanced Data Structures",
            "Data Structures and Algorithms - II Laboratory",
            "Web Systems and Technologies",
            "Big Data Analytics",
            "Microprocessor Techniques",
            "Financial Derivatives and Structuring"
          ],
          "grades": ["BC", "CD", "CC", "CC", "CC", "BC", "CC", "BC", "CC", "CD", "PP"],
          "pointers": ["7", "5", "6", "6", "6", "7", "6", "7", "6", "5", "0"]
        }
      },
    
    
    
    
    
    
    
    











];






export default students