def calculate_longevity(problem, market, competition, trend):
    total = problem + market + (25 - competition) + (25 - trend)

    if total <= 30:
        category = "Hype"
    elif total <= 70:
        category = "Medium-Term"
    else:
        category = "Long-Term"

    reasons = [
        f"Problem severity score: {problem}",
        f"Market need score: {market}",
        f"Competition impact: {competition}",
        f"Trend dependency: {trend}"
    ]

    return total, category, reasons
