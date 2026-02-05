from datetime import datetime

def calculate_decay(last_used, practice_gap):
    days_passed = (datetime.now() - last_used).days
    decay = (days_passed / practice_gap) * 100
    return min(decay, 100)
