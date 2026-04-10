/*
 * ============================================================
 *   BILL SPLITTER with CHEAPSKATE DETECTION
 *   Easy C++ Console Project
 * ============================================================
 */

#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include <cmath>

using namespace std;

// ── ANSI Colors (Windows pe kaam nahi karta, Linux/Mac pe karta hai) ──
#define RESET   "\033[0m"
#define RED     "\033[31m"
#define GREEN   "\033[32m"
#define YELLOW  "\033[33m"
#define CYAN    "\033[36m"
#define BOLD    "\033[1m"

struct Person {
    string name;
    double amountPaid;
    double fairShare;
    double difference;   // positive = overpaid, negative = underpaid
    int    cheapskateScore; // 0-100
    string title;
};

void printLine(char c = '-', int len = 50) {
    cout << string(len, c) << "\n";
}

void printHeader() {
    printLine('=');
    cout << BOLD << CYAN
         << "   💸 BILL SPLITTER + CHEAPSKATE DETECTOR 💸\n"
         << RESET;
    printLine('=');
}

// Cheapskate score: kitna kam diya fair share se
// 0  = fair hai / zyada diya
// 100 = ek paisa nahi diya
int calcCheapskateScore(double paid, double fairShare) {
    if (paid >= fairShare) return 0; // no cheapskate
    double shortfall = fairShare - paid;
    double ratio = shortfall / fairShare; // 0 to 1
    return (int)(ratio * 100);
}

string getCheapskateTitle(int score) {
    if (score == 0)   return "✅ Gentleman / Lady";
    if (score <= 10)  return "😏 Thoda Kam Diya";
    if (score <= 25)  return "🤨 Suspicious Banda";
    if (score <= 50)  return "😤 Kanjoos";
    if (score <= 75)  return "😡 Bada Kanjoos!";
    return              "🚨 MAHA KANJOOS - AVOID!";
}

void printSummary(vector<Person>& people, double totalBill, double fairShare) {
    printLine('=');
    cout << BOLD << "\n📊 BILL SUMMARY\n" << RESET;
    printLine();

    cout << fixed << setprecision(2);
    cout << "Total Bill   : ₹" << totalBill << "\n";
    cout << "No. of People: " << people.size() << "\n";
    cout << "Fair Share   : ₹" << fairShare << " per person\n\n";

    printLine();
    cout << BOLD
         << left  << setw(12) << "Name"
         << right << setw(10) << "Paid"
         << right << setw(10) << "Fair"
         << right << setw(10) << "Diff"
         << right << setw(8)  << "Score"
         << "\n" << RESET;
    printLine();

    for (auto& p : people) {
        // Color: green = overpaid, red = underpaid
        string color = (p.difference >= 0) ? GREEN : RED;
        string sign  = (p.difference >= 0) ? "+" : "";

        cout << color
             << left  << setw(12) << p.name
             << right << setw(9)  << "₹" + to_string((int)p.amountPaid) + "." + to_string((int)round((p.amountPaid - (int)p.amountPaid)*100))
             << right << setw(9)  << "₹" + to_string((int)fairShare)
             << right << setw(9)  << sign + "₹" + to_string(abs((int)p.difference))
             << right << setw(7)  << p.cheapskateScore << "/100"
             << RESET << "\n";
    }
}

void printCheapskateReport(vector<Person>& people) {
    printLine('=');
    cout << BOLD << "\n🏆 CHEAPSKATE REPORT\n" << RESET;
    printLine();

    // Sort by cheapskate score (descending) for display
    // Simple bubble sort (basic C++)
    for (int i = 0; i < (int)people.size()-1; i++) {
        for (int j = 0; j < (int)people.size()-1-i; j++) {
            if (people[j].cheapskateScore < people[j+1].cheapskateScore)
                swap(people[j], people[j+1]);
        }
    }

    for (auto& p : people) {
        string color = (p.cheapskateScore == 0) ? GREEN :
                       (p.cheapskateScore <= 25) ? YELLOW : RED;
        cout << color
             << "  " << left << setw(14) << p.name
             << " | Score: " << setw(3) << p.cheapskateScore << "/100"
             << " | " << p.title
             << RESET << "\n";
    }

    // Find max cheapskate
    if (people[0].cheapskateScore > 0) {
        printLine();
        cout << RED << BOLD
             << "\n⚠️  SABSE BADA KANJOOS: " << people[0].name
             << " (Score: " << people[0].cheapskateScore << "/100)"
             << RESET << "\n";
    } else {
        cout << GREEN << BOLD
             << "\n🎉 Sab ne fairly pay kiya! Great group!\n"
             << RESET;
    }
}

void printSettlement(vector<Person>& people) {
    printLine('=');
    cout << BOLD << "\n💳 SETTLEMENT (Kaun kise dega)\n" << RESET;
    printLine();

    // Positive = credit (zyada diya), Negative = debt (kam diya)
    vector<pair<string,double>> creditors, debtors;
    for (auto& p : people) {
        if (p.difference > 0.01)
            creditors.push_back({p.name, p.difference});
        else if (p.difference < -0.01)
            debtors.push_back({p.name, -p.difference}); // store positive
    }

    if (debtors.empty()) {
        cout << GREEN << "  Koi settlement nahi chahiye! Sab barabar hai.\n" << RESET;
        return;
    }

    int ci = 0, di = 0;
    while (ci < (int)creditors.size() && di < (int)debtors.size()) {
        double amount = min(creditors[ci].second, debtors[di].second);
        cout << YELLOW
             << "  " << debtors[di].first
             << " → " << creditors[ci].first
             << " ko de: ₹" << fixed << setprecision(2) << amount
             << RESET << "\n";

        creditors[ci].second -= amount;
        debtors[di].second   -= amount;

        if (creditors[ci].second < 0.01) ci++;
        if (debtors[di].second   < 0.01) di++;
    }
}

int main() {
    printHeader();
    cout << "\n";

    // ── Input ──
    double totalBill;
    cout << CYAN << "💰 Total bill kitna tha? ₹" << RESET;
    cin >> totalBill;

    int n;
    cout << CYAN << "👥 Kitne log the? " << RESET;
    cin >> n;

    if (n <= 0 || totalBill <= 0) {
        cout << RED << "Invalid input!\n" << RESET;
        return 1;
    }

    double fairShare = totalBill / n;

    vector<Person> people(n);
    cout << "\n" << YELLOW << "Har ek ka naam aur usne kitna diya enter karo:\n" << RESET;
    printLine();

    double totalPaid = 0;
    for (int i = 0; i < n; i++) {
        cout << "Person " << i+1 << " naam: ";
        cin >> people[i].name;
        cout << people[i].name << " ne kitna diya? ₹";
        cin >> people[i].amountPaid;

        totalPaid += people[i].amountPaid;
        people[i].fairShare  = fairShare;
        people[i].difference = people[i].amountPaid - fairShare;
        people[i].cheapskateScore = calcCheapskateScore(people[i].amountPaid, fairShare);
        people[i].title      = getCheapskateTitle(people[i].cheapskateScore);
        cout << "\n";
    }

    // Check total mismatch
    if (abs(totalPaid - totalBill) > 1.0) {
        cout << YELLOW
             << "⚠️  Warning: Total paid (₹" << totalPaid
             << ") matches nahi kar raha bill (₹" << totalBill << ")\n"
             << RESET;
    }

    printSummary(people, totalBill, fairShare);
    printCheapskateReport(people);
    printSettlement(people);

    printLine('=');
    cout << CYAN << "\nProgram by: Cheapskate Detector v1.0\n" << RESET;

    return 0;
}
