def calculate_average(*args):
    if len(args) == 0:
        return None
    total = sum(args)
    average = total / len(args)
    return average

def print_student_details(name, *scores):
    average_score = calculate_average(*scores)
    print(f"Name: {name}")
    print(f"Scores: {', '.join(map(str, scores))}")
    print(f"Average Score: {average_score}")

print_student_details("John", 85, 90, 92, 88)


